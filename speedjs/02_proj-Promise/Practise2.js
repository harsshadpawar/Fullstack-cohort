let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    //report[expense.category] += expense.amount;
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

//[{"food":50},{"XYZ":120}]

console.log("Expense Report", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

// filter sort

let pendingSortedTask = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a - b);

console.log(pendingSortedTask);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  return { title: movie.title, ratings: average.toFixed(2) };
});

//[{ title: "Movie A", ratings: [4, 5, 3]}]
console.log(averageRatings);
console.log(movieRatings);
