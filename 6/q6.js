let site = {
    siteName: "W3Docs",
    bookName: "Javascript",
    get fullName() {
        return `Welcome to ${this.siteName}, ${this.bookName} book`;
    },

    set fullName(value) {
        value = value.split(" ");
        this.siteName = value[0];
        this.bookName = value[1];
    }
};

console.log(site.fullName);
site.fullName = "W3 CSS";
console.log(site.siteName);
console.log(site.bookName);

