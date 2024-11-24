const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: { type: String, require: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

/**
 * mongoose 모델을 생성을 하면 이 모델에 MongoDB의 데이터를 조회, 수정, 삭제하는 여러 메서드가 자동으로 포함됨
 * Mongoose가 MongoDB의 기본 CRUD 작업을 더욱 간단하게 처리할 수 있도록 제공하는 기능
 *  find(): 모든 문서를 조회합니다.
    예: Todo.find()는 todos 컬렉션에 있는 모든 할 일을 가져옵니다.
    findById(): _id로 특정 문서를 조회합니다.
    예: Todo.findById(id)는 _id가 id인 할 일을 가져옵니다.
    findByIdAndUpdate(): _id로 특정 문서를 찾아서 업데이트합니다.
    예: Todo.findByIdAndUpdate(id, updateData, options)는 _id가 id인 할 일을 updateData로 업데이트합니다.
    save(): 새로운 문서를 데이터베이스에 저장합니다. (new Todo({...})로 새로운 객체를 만들 때 사용)
    예: newTodo.save()는 새로 만든 newTodo 객체를 MongoDB에 저장합니다.
    findByIdAndDelete(): _id로 특정 문서를 찾아 삭제합니다.
    예: Todo.findByIdAndDelete(id)는 _id가 id인 할 일을 삭제합니다.

 */
const Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;