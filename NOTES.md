# NOTES.md

## Thought Process

### Data Transformation Strategy

I approached the data transformation by creating a pure function `mapStudentDataItemsToStudents` that converts the original `StudentDataItem[]` to the required `Student[]` format. This transformation includes:

1. Converting numeric ID to string format
2. Concatenating firstName and lastName into a single name field
3. Calculating age from birthdate using a dedicated utility function
4. Computing average scores across math, english, and science subjects
5. Converting boolean `isActive` to a user-friendly "Yes"/"No" label

## Assumptions Made

### Age Calculation

- Assumed current date should be used for age calculation
- Implemented proper birthday logic (age decrements if birthday hasn't occurred yet this year)
- Made the utility function testable by accepting an optional `today` parameter

### Average Score Calculation

- Applied rounding to nearest integer for display purposes using `Math.round()`

### Pass/Fail Logic

- Implemented "Passed" field as per pdf guidelines based on average score ≥ 60

### Data Immutability

- Kept original `studentsData` array unchanged as required
- Created new arrays for filtered/sorted results to avoid mutations

## Additional Features Implemented

### Sorting Functionality

- **Feature**: Alphabetical sorting by student name (A-Z and Z-A)
- **Implementation**: Dropdown select with two options
- **Logic**: Case-insensitive string comparison using `toLowerCase()`

### Active Students Filter

- **Feature**: Checkbox to show only active students
- **Logic**: Filters based on `activeLabel === 'Yes'`

## Technical Decisions

### Code Organization

- Separated concerns into logical modules (types, utils, data)
- Kept components focused and reusable
- Used consistent naming conventions

### Performance Considerations

- Used array methods appropriately for functional programming style
- Minimized DOM manipulations by using Svelte's reactive system

## Future Enhancements

If given more time, I would consider:

- Adding search functionality by name
- Implementing additional sorting options (by age, score, etc.)
- Adding accessibility features (ARIA labels, keyboard navigation)
- Including loading states for better UX
- Adding unit tests for utility functions
- Implementing data persistence for filter/sort preferences
