function solve(httpObj) {
  validateMethod(httpObj);
  validateUri(httpObj);
  validateVersion(httpObj);
  validateMessage(httpObj);

  return httpObj

  function validateMethod(httpObj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let propName = "method";

    if (
      httpObj[propName] === undefined ||
      validMethods.includes(httpObj[propName]) === false
    ) {
      throw new Error("Invalid request header: Invalid Method");
    }
  }

  function validateUri(httpObj) {
    let propName = "uri";
    let uriRegex = /^\*$|^[a-zA-Z0-9.]+$/;

    if (
      httpObj[propName] === undefined ||
      uriRegex.test(httpObj[propName]) === false
    ) {
      throw new Error("Invalid request header: Invalid URI");
    }
  }

  function validateVersion(httpObj) {
    let propName = "version";
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (
      httpObj[propName] === undefined ||
      validVersions.includes(httpObj[propName]) === false
    ) {
      throw new Error("Invalid request header: Invalid Version");
    }
  }

  function validateMessage(httpObj) {
    let propName = "message";
    let messageRegex = /^[^<>\\&'"]*$/;

    if (
      httpObj[propName] === undefined ||
      messageRegex.test(httpObj[propName]) === false
    ) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
}
console.log(solve({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  }));
//========================================
function validateRequest(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {
      throw new Error('Invalid request header: Invalid Method');
    }
  
    if (!obj.hasOwnProperty('uri') || !/^[A-Za-z0-9.]+$/g.test(obj.uri)) {
      throw new Error('Invalid request header: Invalid URI');
    }
  
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {
      throw new Error('Invalid request header: Invalid Version');
    }
  
    if (!obj.hasOwnProperty('message')) {
      throw new Error('Invalid request header: Invalid Message');
    }
  
    if (/[<>&'"\\]/g.test(obj.message)) {
      throw new Error('Invalid request header: Invalid Message');
    }
  
    return obj;
  }