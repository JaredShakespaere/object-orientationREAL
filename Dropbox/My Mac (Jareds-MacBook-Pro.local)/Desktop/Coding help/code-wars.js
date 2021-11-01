str = 'Hello World'

function disemvowel(str) {
    if(str.contains('a','e','i','o','u')){
        str.remove('a','e','i','o','u')
    }
    return str;
  }

  disemvowel()