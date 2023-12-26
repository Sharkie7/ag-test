export const errorArray = [
  'Syntax Error',
  'Type Error',
  'Range Error',
  'URI Error',
  'Network Error',
  'Custom Error',
  'Stack Overflow',
  'Null Pointer Exception',
  'Json Error',
  'DOM Exception',
  'Web API',
  'User defined',
  'Page Crash'
];

export const generateError = (e) => {
  var value = e.target.value;

  // const a = value + " " + Math.floor(Math.random() * (9000 - 8990 + 1) + 8990);
  // console.log(a);

  // window.zipy.logMessage(a);
  if (value === 'Syntax Error') {
    // Simulate a syntax error
    eval('foo!');
  }
  else if (value === 'Type Error') {
    // Simulate a type error
    const arr = [1, 2, 3];
    arr.map((item) => item.toUpperCase());
  }
  else if (value === 'Range Error') {
    // Simulate a range error
    const arr2 = new Array(-1);

  }
  else if (value === 'URI Error') {
    // Simulate a URI error
    decodeURIComponent('%');
  }
  else if (value === 'Network Error') {
    // Simulate a network error
    fetch('https://www.example.com/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  else if (value === 'Custom Error') {
    // Simulate a custom error
    const customError = new Error('Custom error');
    throw customError;
  }
  else if (value === 'Stack Overflow') {
    // Simulate a stack overflow error
    const callFunc = () => {
      callFunc();
    };
    callFunc();
  }
  else if (value === 'Null Pointer Exception') {
    // Simulate a null pointer exception
    const obj = null;
    const value = obj.property;
  }
  else if(value === 'Page Crash') {
    let str = [];
    while(true){
      str.push('error');
    }
  }
  else if (value === 'DOM Exception') {
    // Simulate a DOM exception
    document.getElementById('nonexistent-id').innerHTML = 'Hello World';
  }
  else if (value === 'Web API') {
    // Simulate a Web API error
    window.crypto.getRandomValues(new Float32Array(10));
  }
  else if (value === 'Json Error') {
    // Simulate a Json Error
    // JSON.parse('{"foo":');
    JSON.parse('{"foo":}');
  }
  else if (value === 'User defined') {
    // // Simulate a user-defined exception
    function UserException(message) {
      this.message = message;
      this.name = 'UserException';
    }
    throw new UserException('User-defined exception');
  }
}