const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    create = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(house),
            });
            return resp;
        } catch (e) {
            console.log('Oops, looks like creating houses had an issue.', e);
        }
    };

    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    };

    update = async (house) => {
        try {
            let updatedWithoutId = {
                name: house.name,
                location: house.location,
                room: house.room,
                area: house.area,
                backyard: house.backyard,
            };
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId),
            });
            return resp;
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    };

   delete = async (id) => {
       try {
           const resp = await fetch(`${HOUSES_ENDPOINT}/${id}`, {
               method: 'DELETE',
               headers: {
                   'Content-Type': 'application/json',
               },
           });
           return resp;
        }  catch (e) {
           console.log('Oops, looks like deleteing houses had an issue.', e);
       }
   };
}

export const housesApi = new HousesApi();