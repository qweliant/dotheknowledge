function welcome(first, last, lang) {
    console.log(arguments)
    lang = lang || 'en'
    if (arguments.length === 0){
    console.log('NOOOO 🙆🏿')
    console.log('-----------------')
        return
    }
    console.log(first)
    console.log(last)
    console.log(lang)
    console.log('-----------------')
}

welcome()
welcome('John')
welcome('Lil', 'Jon', 'jpn')
welcome()