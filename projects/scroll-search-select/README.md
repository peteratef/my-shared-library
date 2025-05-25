# Features

- Single Select DropDown
- Multiple Select DropDown
- Server side search
- loadmore from server side
- Infinite Scroll
- simple ui/ux
- disable rows
- High performance as its loading data from Server Side

## Installation

- npm i @petermika/scroll-search-select --save
- in shrared module export ScrollSearchSelectModule from import { ScrollSearchSelectModule } from '@petermika/scroll-search-select';
- in html required component add the following
  <lib-fetch-and-scroll [all_selected_values]=all_selected_values [data]=tags [allSelectedIds]=allSelectedIds
  [allDisabledIds]=allDisabledIds [isDataLoading]=isTagsLoading [topValue]=topValue
  filterPopUpWidthClass="dropdownBigWidth" selectPlaceHolder="Select Tags"
  searchPlaceHolder="Search by TagName/IDs" firstData="tagName" secondData="tagId"
  disableConditionField="isAvailable" checkBoxParmeter="tagId" className="divAsInputGrey"
  error="errorCondition"
  (onChange)="onChange($event)" (search)="search($event)" (listData)="listData($event)" (onScroll)="onScroll()"
  (onClickOutside)="onClickOutside()" (onTouch)="onTouchSearch()">
  </lib-fetch-and-scroll>

- in ts file add the following variables
  // start of tags search parameters

  filter: string = '';
  offset: number = 0;
  limit: number = 20;

  all_selected_values: Array<YourModel> = new Array<YourModel>();
  allSelectedIds: any = [];

  isTagsLoading: boolean = false;

  // end of tags search parameters

functions used
/////// start of tags search pagination /////////

onScroll() {
this.listYourData(this.offset + this.limit, this.limit, this.filter);
}
onChange(value: any): void {
const itemToRemoveIndex = this.all_selected_values.findIndex(function (item) {
return item.id === value.id;
});

    if (itemToRemoveIndex !== -1) {
      this.all_selected_values.splice(itemToRemoveIndex, 1);
    } else {
      this.all_selected_values.push(value);
    }


    this.allSelectedIds = this.all_selected_values.map(function (o: any) {
      return o.id;
    });

}

search(searchTag: string) {
clearTimeout(this.debounceTimer);
this.debounceTimer = setTimeout(() => {
this.listM2mTags(0, 20, searchTag);
}, 900);
}

listData(object: any) {
this.listYourData(object.offset, object.limit, object.filter);
}
onTouchSearch() {
this.isTagsTouched = false;
this.markInputAsTouched(this.m2mForm.controls, 'tags');
}

onClickOutside() {
this.isTagsTouched = true;
}

/////// end of tags search pagination /////////

listYourData(offset?: number, limit?: number, filter?: string) {
this.isTagsLoading = true;
this.filter = filter ? filter : '';

    if ((offset || offset === 0) && limit) {
      this.offset = offset;
      this.limit = limit;
    }
    // calling the api
    listYourData(this.offset, this.limit, undefined, this.filter, undefined)
      .subscribe(
        (data) => {
          if (data.body) {
            this.isTagsLoading = false;
            if (offset === 0) {
              this.data = data.body;
            } else {
              this.data = this.data.concat(data.body);
            }
          }
        },
        (error) => {
          this.isTagsLoading = false;
          this.successErrorMessage = error.error.message;
          this.showErrorMessage = true;
          setTimeout(() => {
            this.showErrorMessage = false;
          }, globalVariables.messageTimeOut);
        },
      );

}

## inputs and outputs explanation

// selected value in edit or when check or click

// options send it with 'dropdownSmallWidth' for smaller width
@Input() all_selected_values: Array<{ [key: string]: any }> = new Array<{
[key: string]: any;
}>();
// above is the whole values that will appear
@Input() data: Array<any> = new Array<{ [key: string]: any }>(); /// the data that will appear in the listing
@Input() topValue!: string; // the position of the field
@Input() allSelectedIds: any; // the selected value in case of edit, -->
// also in multiple when chosing a value and reset the search
// --> or the selected when click, as object, as can be single of multipe
// and also it is the selected ids when submitting the form

@Input() isDataLoading: boolean = false; // the spinner for the loading data
@Input() selectPlaceHolder!: string; // the select place holder text
@Input() searchPlaceHolder!: string; // the search place holder text
@Input() zIndex!: string; // if there is two select below each other, the top have more zIndex
@Input() firstData!: string; // if tags show tags.id and tags.tagName, else -->
// --> anything else show the names.englishNames
@Input() secondData!: string; // the second data in each row
@Input() disableConditionField!: string; // in case you want to disable the field depending on a certain record
// or as below if you have array of inputs
@Input() allDisabledIds: number[] = []; // in case of multiple if i want to disable certain ids
// or another way to make it disable is to add the third paramenter
// like first name and last name to add the disableField
@Input() checkBoxParmeter!: string; // to show if it is single of mutliple, if single don't send it in the html,
// --> if multiple send the columid for example

@Input() error!: any; // if there is an error in the field
@Output() onChange = new EventEmitter<any>();
@Output() search = new EventEmitter<any>();
@Output() listData = new EventEmitter<any>();
@Output() onScroll = new EventEmitter<any>();
@Output() onTouch = new EventEmitter<any>();
@Output() onClickOutside = new EventEmitter<any>();

### Keywords

- Single Select DropDown
- Multiple Select DropDown
- Server side search
- loadmore from server side
- Infinite Scroll
- simple ui/ux
- disable rows
- High performance as its loading data from Server Side
- select with load more from Backend
- single/mutiple drop down with search and loadmore
