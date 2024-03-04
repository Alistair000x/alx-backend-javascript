function* createIteratorObject(report) {
for (const department in report) {
for (const employee of report[department]) {
yield employee;
}
}
}
export default createIteratorObject;
