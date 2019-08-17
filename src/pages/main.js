import React, { useState, useEffect } from 'react';

import { 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button,
    FlatList
} from 'react-native';

import api from '../backend/server/api'

export default function pages(){

    const [id, setId] = useState('');
    const [user, setUser] = useState('');
    const [desc, setDesc] = useState('');
    const [dev, setDev] = useState([])

   /* useEffect( () => {
        async function loadDevs(){
        const response = await api.get("/");
        const devs = response.data;
        setDevs(devs);
        }
        loadDevs();
    },[])
*/

    //https://rocketseat-node.herokuapp.com/api
    
    saveButton = () => { 
        fetch('http://192.168.0.102:4545/add',{ 
            method: 'POST', 
            headers: { 
               'Accept': 'application/json', 
               'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify( 
               {  
                _id: id,
                 name: user, 
                 description: desc
               } 
            ) 
            }).then((responseNota) => { 
               return responseNota.json(); 
            }).done(); 
                //this._id = null
                //this.name = null
                //this.description = null
    } 

    searchButton = () => { 
        async function loadDevs(){
            const response = await api.get("/" + id);
            const dev = response.data;
            setDev(dev);
            }
            loadDevs();
    } 
       
    /*const app = dev.map(d => (
        <View key={d._id}>
          <Text style={{color:'#fff'}}>{d.name}//</Text>
          <Text>{d.description}</Text>
        </View>
    ))*/

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#808'}}>
            <TextInput value={id} onChangeText={setId} placeholder={'buscar DEV'}/><Button title={'Buscar'} onPress={this.searchButton}/>


            <TextInput onChangeText={setId} placeholder={'Id do DEV'} 
                style={{borderBottomWidth: 1, borderBottomColor: '#fff', width: 300, margin: 10, color: '#fff'}}
            />
            <TextInput value={user} onChangeText={setUser} placeholder={'Nome do DEV'} 
                style={{borderBottomWidth: 1, borderBottomColor: '#fff', width: 300, margin: 10, color: '#fff'}}
            />
            <TextInput value={desc} onChangeText={setDesc} placeholder={'Descrição do DEV'} 
                style={{borderBottomWidth: 1, borderBottomColor: '#fff', width: 300, margin: 10, color: '#fff'}}
            />
            <TouchableOpacity onPress={this.saveButton} 
                style={{backgroundColor: '#fff', height: 50, width: 300, borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 20}}    
            >
                <Text style={{fontWeight: "bold", color: '#808'}}>Enviar</Text>
            </TouchableOpacity>
            <View>
                <Text>{dev.name}</Text>
                <Text>{dev.description}</Text>
            </View>
        </View>
    )
  }
