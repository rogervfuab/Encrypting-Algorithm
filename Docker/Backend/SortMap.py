
def sorted_array(sortmap,input):
    error = [x for x in input if x not in sortmap]
    if error==[]:
        value_pos =  {k:[] for k in range(len(sortmap))}
        array_final = ''
        for x in input: #for every value of the input
            p = sortmap.index(x) # we stract die position in sortmap
            value_pos[p].append(x)  # we put the position in the list
        value_pos_sorted = sorted(value_pos.items(), key=lambda x: x[0]) #sort the diccionari by positions
        array_final = ''.join([''.join(y[1]) for y in value_pos_sorted if y[1]!=[]]) #every postion contains de value to the message_encripted
        pos_final = ''.join([str(sortmap.index(v)) for v in input if v in array_final])#postions to apply to the sortmax 
        return pos_final,array_final
    return 'error',error

            


'''
#### TESTOS ###
# Test 1: SortingProcess_example1
array_sortmap1 = '9876543210'
array_pasada1 = '12345567890'
array_return1 = '98765543210'
array_pos1 = '87654432109'
z,y = sorted_array(array_sortmap1,array_pasada1)

print(f'String that the program should return: {array_return1}')
print(f'String that the program return: {y}' )
print(f'So the program works: {array_return1 == y}')
print('\n')



print(f'Positions that we would aplicate to the SortMap to have the string: {array_pos1}')
print(f'Position that the program returns: {z}' )
print(f'So the program works: {array_pos1 == z}')
print('\n')



# Test 2: SortingProcess_example2
array_sortmap2 = '6780432159'
array_pasada2 = '135543817'
array_return2 = '784331155'
array_pos2 = '758845271'
z,y = sorted_array(array_sortmap2,array_pasada2)

print(f'String that the program should return: {array_return2}')
print(f'String that the program return: {y}' )
print(f'So the program works: {array_return2 == y}')
print('\n')



print(f'Positions that we would aplicate to the SortMap to have the string: {array_pos2}')
print(f'Position that the program returns: {z}' )
print(f'So the program works: {array_pos2 == z}')
print('\n')



# Test 3: Sorting with letters
array_sortmap3 = 'abcd'
array_pasada3 = 'adbac'
array_return3 = 'aabcd'
array_pos3 = '03102'
z,y = sorted_array(array_sortmap3,array_pasada3)

print(f'String that the program should return: {array_return3}')
print(f'String that the program return: {y}' )
print(f'So the program works: {array_return3 == y}')
print('\n')



print(f'Positions that we would aplicate to the SortMap to have the string: {array_pos3}')
print(f'Position that the program returns: {z}' )
print(f'So the program works: {array_pos3 == z}')
print('\n')


# Test 4: Sorting with letters uppers und lowers
array_sortmap4 = 'abcAd'
array_pasada4 = 'adAAbac'
array_return4 = 'aabcAAd'
array_pos4 = '0433102'
z,y = sorted_array(array_sortmap4,array_pasada4)

print(f'String that the program should return: {array_return4}')
print(f'String that the program return: {y}' )
print(f'So the program works: {array_return4 == y}')
print('\n')



print(f'Positions that we would aplicate to the SortMap to have the string: {array_pos4}')
print(f'Position that the program returns: {z}' )
print(f'So the program works: {array_pos4 == z}')
print('\n')

# Test 5: Sorting with symbols
array_sortmap5 = '*/- +'
array_pasada5 = '++-*  /'
array_return5 = '*/-  ++'
array_pos5 = '4420331'
z,y = sorted_array(array_sortmap5,array_pasada5)

print(f'String that the program should return: {array_return5}')
print(f'String that the program return: {y}' )
print(f'So the program works: {array_return5 == y}')
print('\n')



print(f'Positions that we would aplicate to the SortMap to have the string: {array_pos5}')
print(f'Position that the program returns: {z}' )
print(f'So the program works: {array_pos5 == z}')
print('\n')

# Test 6: Sorting with all
array_sortmap6 = '*/-Avs45P+'
array_pasada6 = '+44AA54P+/4-v*v'
array_return6 = '*/-AAvv44445P++'
array_pos6 = '966337689162404'
z,y = sorted_array(array_sortmap6,array_pasada6)

print(f'String that the program should return: {array_return6}')
print(f'String that the program return: {y}' )
print(f'So the program works: {array_return6 == y}')
print('\n')



print(f'Positions that we would aplicate to the SortMap to have the string: {array_pos6}')
print(f'Position that the program returns: {z}' )
print(f'So the program works: {array_pos6 == z}')
print('\n')

'''