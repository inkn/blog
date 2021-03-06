var mongoose = require('mongoose')



// // 1.连接数据库
// mongoose.Collection('mongodb://localhost/Blog')

// 2.创建Schema
var Schema = mongoose.Schema

var topicSchema = new Schema({
    title: {
        type: String
    },
    t_content: {
        type: String
    },
    author: {
        type: String
    },
    author_avatar: String,
    created_time: {
        type: Date,
        default: Date.now
    },
    lastUpdate_time: {
        type: Date,
        default: Date.now
    },
    visitedNum: {
        type: Number,
        default: 0
    },
    comments: [
        {
            author: String,
            author_avatar:String,
            content: String,
            favs: [{author: String}],
            c_comments: [{author: String,author_avatar:String, content: String,date: {type: Date, default: Date.now}}],
            date: {type: Date, default: Date.now}
        }],
    display: {
        type: Number,
        default: 0
    }
})
// 3. 发布modle
var model = mongoose.model('Topic', topicSchema)

module.exports = model