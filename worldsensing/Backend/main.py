from fastapi import FastAPI, Request
from pydantic import BaseModel
import uvicorn
from SortMap import sorted_array
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()


origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


sortmaps = []

ids = []

#not necessary
#create a route
@app.get('/') #it works
#@decorador --> register de funktion
def index():
    return {'Hello':'You have to intruduce a string and a message to encript'}




#Get lists of sortmaps
@app.get('/api/list_sortmaps')
def get_sortmaps():
    if len(sortmaps)!=0:
        sorted_sortmap = sorted(sortmaps, key=lambda k: k['id']) #sort the list by id
        return sorted_sortmap
    else: # if sortmpas list is null
        return {'Error':'No sortmaps, you have to create your sortmap'}


#get sortmap entity
@app.post('/api/sortmaps')
async def get_sortmaps(request: Request):
    payload = await request.json()
    sortmap_id = payload['id']
    for item in sortmaps: 
        sortmap_id = int(sortmap_id)
        if item['id'] == sortmap_id: #if id exists return if not error
            return item
    
    return {'Error':'Sortmap with id: [{}] does not exist'.format(sortmap_id)}
     









#create new entry
@app.post('/api/sortmap',status_code=201)
async def create_sortmap(request: Request):

    payload = await request.json()
    sortmap = payload['value']
    id = 1 #always inicialitzation in 1
    list_value = list(sortmap)
    comprovation = [x for x in list_value if list_value.count(x) > 1] #see if we have a string with duplicates
    if comprovation == []:
        for item in sortmaps:
            if sortmap == item['value']: #if value exists, we can't introduce it
                return {'Error': 'Sortmap with value: [{}] already exist'.format(sortmap)}
        while id in ids: #this is because if we eliminate the id:1 und we have 4 sortmaps, the newest sortmap will have the id:1, so we have always all the ids sort
            id+=1
        ids.append(id)
        sortmaps.append({'id': id, 'value': sortmap}) #we save the sortmap with the id
        return {'id': id, 'value': sortmap} #return the sortmap

    return {'Error': 'This Sortmap has duplicated values'}










#update value
@app.put('/api/sortmap/{sortmap_id}') 
async def update_sortmap(sortmap_id:int,request:Request):

    payload = await request.json()
    sortmap = payload['value']
    list_value = list(sortmap)
    comprovation = [x for x in list_value if list_value.count(x)>1]#see if we have a string with duplicates
    if comprovation == []:
        permited = [x for x in sortmaps if sortmap==x['value']] #see if the sortmap new is the same as the old, if it's the case we return an error
        for item in sortmaps:
            if sortmap_id == item['id']:
                if permited ==[]:
                    pos = sortmaps.index(item) #if we found the id, and it's not the same sortmap, we search where is this id and change it
                    sortmaps[pos] = {'id':sortmap_id,'value':sortmap} #we update the sortmap
                    return {'id':sortmap_id,'value':sortmap} #we return the sortmap
                elif sortmap_id == item['id'] and item['value']==sortmap: #if they had introduce the same value 
                    return {'Error':'This Sortmap is the Sortmap as before'}
                else:
                    return {'Error': 'Sortmap with value: [{}] already exist'.format(sortmap)} #if we find the value
            
            
        return {'Error':f'Sortmap with id: [{sortmap_id}] does not exist'}#if we did'nt find the id, we don't have it
    return {'Error':'This Sortmap has duplicated values'}










#Delete an already-set sortmap
@app.delete('/api/sortmap/{sortmap_id}') 
async def delete_sortmap(sortmap_id:int):
    for item in sortmaps:
        if item['id'] == sortmap_id: #we find the id
            pos_id = ids.index(sortmap_id) #we search in the ids
            pos_item = sortmaps.index(item) #we serach the item
            del ids[pos_id] #we delete from ids the id
            del sortmaps[pos_item] #we delete the item
            return 'Done it'
    return {'Error':'Sortmap with id: [{}] does not exist'.format(sortmap_id)}

    









#Sorts the text according to the sortmap specified
@app.post('/api/order') 
async def order_input(request:Request):
    payload = await request.json()
    to_encript = payload['value'] #value to encrypt
    xx = payload['id'] #the sortmap id with wich we want to encrypt the message
    if xx != None: 
        xx = int(xx) #we pass the id to a int
    for item in sortmaps:
        if item['id'] == xx:   #if we find the id we do it
            p,a = sorted_array(item['value'],to_encript) #we make the encription
            if p=='error': #if it's an error we return that there are values in input wich are no in sortmap
                return {'Error':'This Message Input has values that there are not in the Sortmap, so we can not encript this message.'}
            return {'sortmap_id':xx,'response':a} #if all its okay we return this
    
    return {'Error':'Sortmap with id: [{}] does not exist'.format(xx)} #if we didn't find the id, we can't do it




if __name__ == '__main__':
    uvicorn.run('main:app',port=8000,reload=True)
