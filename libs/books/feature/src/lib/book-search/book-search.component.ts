import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  getReadingList,
  ReadingListBook,
  removeFromReadingList,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder } from '@angular/forms';
import { Book, ReadingListItem } from '@tmo/shared/models';
import { Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books: ReadingListBook[];
  itemList: ReadingListItem[];
  readingList = this.store.select(getReadingList);
  searchForm = this.fb.group({
    term: ''
  });

  private bookSubject = new Subject<string>();

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.bookSubject.pipe(
      debounceTime(500)
    ).subscribe((res) => this.searchBooks());
    this.readingList.subscribe(
      itemList => {
        this.itemList = itemList;
      }
    )
  }
  get searchTerm(): string {
    return this.searchForm.value.term;
  }
  ngOnInit(): void {
    this.store.select(getAllBooks).subscribe(books => {
      this.books = books;
    });
  }
  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }
  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
    this.actionConfirmation(
      'Adding To reading list ' + book.title,
      this.removeFromReadingList,
      this.itemList
    )
  }
  removeFromReadingList = (data:ReadingListItem[]) => {
    const item = data[data.length-1];
    this.store.dispatch(removeFromReadingList({ item }));
  }
  actionConfirmation(msg, func, data) {
    const snackBarRef = this.snackBar.open(msg, 'Undo');
    snackBarRef.onAction().subscribe(() => {
      func(data);
    });
  }
  searchExample() {
    this.searchForm.controls.term.setValue('javascript');
    this.searchBooks();
  }
  searchBooks() {
    if (this.searchForm.value.term) {
      this.store.dispatch(searchBooks({ term: this.searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }

  searchBookTypeAhead() {
    this.bookSubject.next();
  }
}
