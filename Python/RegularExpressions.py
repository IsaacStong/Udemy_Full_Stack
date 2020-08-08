import re

#The most normal use for this package is finding patterns in text
patterns = ['term1', 'term2']

text = "This text has term1, and not the other"

for pattern in patterns:
    print("Im searching for: " + pattern)

    if re.search(pattern, text):
        print("Match!")
    else:
        print("No Match!")

#re.search returns a special match type that has a boolean start and end
#Examples
#match = re.search() --> match.start()

#re.findall() finds every occurence in a string

def multi_re_find(patterns, phrase):
    for pat in patterns:
        print("Searching for pattern {}".format(pat))
        print(re.findall(pat, phrase))
        print(''\n')


test_pattern = ['sd*', 'sd+', 'sd?', 'sd{2,3}', 's[sd]+'] #* means finding s with any number of d's after including 0 d's, + means 1 or more, and ? means 0 or 1
# {} means exact number of d's, [] followed by one or more s's or d's

#Removing puncuation, lower case letters, Upper Case, and a special case of finding refer to notes
punc_pat = ['[^!.?]+', '[a-z]+', '[A-z]+' r'\w+']
