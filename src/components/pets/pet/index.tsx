"use client";

import { usePets } from "@/context/PetsContext";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface IFormInputs {
  Name: string
  Gender: string
  Age: number
  Species: string
  Picture: string
}


export default function Pet() {
   const  [editionMode, setEditionMode] = useState(false);

   const { id } = useParams();
   const searchParams = useSearchParams();

  const mode = searchParams.get("mode");

  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      Age: 0,
      Name: "",
      Gender: ""
    },
  })
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log("SUBMIT", data)

  useEffect(() => {
    if (mode === "edit") {
      setEditionMode(true);
    }
  }, [mode]);
   const { getPetById } = usePets();
   const pet = getPetById(id as string);

  if (!pet) return <p>No pet selected</p>;
   return (
      <>
      {!editionMode &&
         <div>
            <div>{pet.name}</div>
            <div>{pet.gender}</div>
            <div>{pet.age}</div>
            <div>{pet.species}</div>
            <div>{pet.picture}</div>
         </div>
      }
      {editionMode && 
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="Name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
              <div className="space-y-2">
                  <TextField  label="name" variant="filled" id="name" {...field}/>
              </div>
              ) }
            />
            <Controller
              name="Gender"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
              <div className="space-y-2">
              <TextField id="select" label="Gender" variant="filled" select {...field}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              </TextField>
              </div>
              ) }
            />
            <Controller
              name="Age"
              control={control}
              render={({ field }) => (
                <TextField {...field} type="number" label="Age" fullWidth variant="filled"/>
              )}
            />
            <Button type="submit" variant="contained">Submit</Button>
          </form>
         </div>
      }
      </>
   )
}