import React, { useState } from 'react';

import { 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button
} from 'react-native';

//import api from '../servers/api'

export default function pages(){

    const [user, setUser] = useState('');
    const [desc, setDesc] = useState('');

   /*async function cad(){
        const response = await api.post('/add', {
            name: user, description: desc
        });
        const { user, desc } = response;
    }
    */

    saveButton = () => { 
        fetch('http://192.168.0.107:4545/add',{ 
            method: 'POST', 
            headers: { 
               'Accept': 'application/json', 
               'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify( 
               {  
                 name: user, 
                 description: desc
               } 
            ) 
            }).then((responseNota) => { 
               return responseNota.json(); 
            }).done(); 
                this.name = null, 
                this.description = null
    } 

    searchButton = () => { 
        fetch('http://192.168.0.107:4545/buscar' + (user),{ 
        method: 'GET' 
            }).then((responseNota) => { 
                return responseNota.json(); 
            }).done(); 
                this.name = null; 
    } 
        
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#808'}}>
            <TextInput value={user} onChangeText={setUser} placeholder={'Nome do DEV'}/><Button title={'Buscar'} onPress={this.searchButton}/>
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
        </View>
    )
  }
