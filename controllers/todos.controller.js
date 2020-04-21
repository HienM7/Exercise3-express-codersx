const todoList = ["Đi chợ", "Nấu cơm", "Rửa chén", "Học code tại CodersX"];

module.exports.getTodos = (req, res) => {
  let q = "";
  if(req.query.q) q = req.query.q;
  const matchedList = todoList.filter(item => item.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  res.render('./todos', {
    list: matchedList,
    q: q
  });
};

module.exports.postTodo = (req, res) => {
  const todo = req.body.todo;
  todoList.push(todo);
  console.log(todoList);
  res.redirect('back');
}