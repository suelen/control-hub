"use client"

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import EditIcon from '@mui/icons-material/Edit';
import { PetType } from './pet.interface';
import { useRouter } from "next/navigation";
import { usePets } from '@/context/PetsContext';
import { useEffect } from 'react';


export default function Pets({petsList}: {petsList: PetType[]}) {
   const router = useRouter();
   const { pets, setPets } = usePets();

   useEffect(() => {
      setPets(petsList);
   }, [petsList, setPets]);

   const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      e.stopPropagation(); 
      router.push(`/pets/${id}?mode=edit`)
   };
   return (
      <Box>
            <List>
              {
                pets.map((pet) => (
                  <ListItem
                     sx={{ backgroundColor: 'var(--background)', padding: '12px 24px', borderRadius: '8px', boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', marginBottom: '24px' }} 
                     key={pet.id}
                     secondaryAction={
                     <IconButton edge="end" aria-label="edit" onClick={(event) => handleEdit(event,pet.id)}>
                        <EditIcon />
                     </IconButton>
                     }
                     onClick={() => {
                        router.push(`/pets/${pet.id}`)
                     }}
                  >
                     <ListItemAvatar>
                        <Avatar alt={pet.name} src={pet.picture} sx={{ width: 85, height: 85 }} variant="circular" />
                     </ListItemAvatar>
                     <ListItemText style={{marginLeft: '24px'}}
                        primary={pet.name}
                     />
                  </ListItem>
              ))}
            </List>
      </Box>
   );
}