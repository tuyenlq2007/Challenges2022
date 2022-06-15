let person = {
    job: 'John',
    getJob: function () {
    return this.job;
  }
};


let peter = {
    job: 'JavaScript Developer'
};


console.log(person.getJob.call(peter));
var get=person.getJob.bind(peter);
console.log(get());
