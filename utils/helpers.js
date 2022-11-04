// formatted date object for post data and display
module.exports = {
  formattedDate: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
}

