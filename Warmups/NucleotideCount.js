// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

// Write a program in ruby that will tell you how many times each nucleotide occurs in a string
// (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).

// It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').

// Example:

// count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
// # output:
// A: 20
// C: 12
// G: 17
// T: 21
// Source
// The Calculating DNA Nucleotides problem at Rosalind

const nucleotideCount = (str) => {
  let strArr = str.split("");
  let count = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case "A":
        count.A++;
        break;
      case "C":
        count.C++;
        break;
      case "G":
        count.G++;
        break;
      case "T":
        count.T++;
        break;
    }
  }
  console.log(count);
};

nucleotideCount(
  "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
);
