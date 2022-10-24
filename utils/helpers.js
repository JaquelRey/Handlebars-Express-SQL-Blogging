
//date formatting for posts
module.exports = {
  formattedDate: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
}

