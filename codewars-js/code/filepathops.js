class FileMaster {
  constructor(filepath) {
    this.filepath = filepath;
  }

  extension() {
    return this.filepath.slice(this.filepath.indexOf(".")+1);
  }

  filename() {
    var arr = this.filepath.split("/");
    return arr[arr.length-1].slice(0,arr[arr.length-1].indexOf("."));
  }

  dirpath() {
    return this.filepath.slice(0,this.filepath.lastIndexOf("/")+1);
  }
}
