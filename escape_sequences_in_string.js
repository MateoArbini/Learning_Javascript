Letter:
Escape Sequences in Strings
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
	To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
	We learned this in the previous challenge.

Assign the following three lines of text into the single variable myStr using escape sequences.

	FirstLine
    		\SecondLine
	ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

	Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.

Answer:

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
