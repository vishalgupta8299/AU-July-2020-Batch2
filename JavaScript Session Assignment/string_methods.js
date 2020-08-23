// String Methods

str="the quick brown fox jumps over the lazy dog"
//"the quick brown fox jumps over the lazy dog"

str.split(" ")
//[ "the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog" ]

str.replace("quick","lazy")
//the lazy brown fox jumps over the lazy dog

str.search("lazy")
//35

str.search("quick")
//-1

str.match("lazy")
/* O/P:

0: "lazy"
​
groups: undefined
​
index: 35
​
input: "the quick brown fox jumps over the lazy dog"
​
length: 1

*/