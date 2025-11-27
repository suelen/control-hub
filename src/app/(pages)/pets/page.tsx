import Pets from '@/components/pets';
import styles from './pets.module.scss';
import { createClient } from 'contentful';
import { Suspense } from 'react';
import { PetType } from '@/components/pets/pet.interface';
import { PetsProvider } from '@/context/PetsContext';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: 'U6nJPuaiZ4o4OdvOdDVG1QVIi4X8QEu8usJ43RxV0w0'
});

export default async function PetsPage() {
  const response = await client.getEntries({ content_type: 'pet', locale: 'en-US' });
  console.log(response);
  const pets = response.items.map((pet) => {
    return {
      id: pet.sys.id.toString(),
      name: pet.fields.name?.toString(),
      gender: pet.fields.gender?.toString(),
      age: Number(pet.fields.age),
      species: pet.fields.species?.toString(),
      picture: ("http:" + pet.fields?.picture?.fields?.file?.url).toString() || null
    };
  }) as PetType[];


  return (
      <main className={styles['pets-container']}>
        <h1>Pets</h1>
        <Suspense>
          <Pets petsList={pets} />
        </Suspense>
      </main>
  );
}