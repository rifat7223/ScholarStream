import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Card from '../../components/Home/Card';

const ALLScholar = () => {
    const {data:Allscholars=[]}=useQuery({
    queryKey:['scholars'],
    queryFn:async ()=>{
      const result= await axios(`${import.meta.env.VITE_API_URL}/scholar`,)
      return result.data
    }
    
  })
 
    return (
        <div>
            <p>All ScholarShip</p>
            {Allscholars.map(Allscholar=><Card key={Allscholar._id} Allscholar={Allscholar} ></Card>)}

        </div>
    );
};

export default ALLScholar;