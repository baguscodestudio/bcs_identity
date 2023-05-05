import React, { useEffect, useState } from 'react';
import './App.css';
import InputLabel from './components/InputLabel';
import ToggleButton from './components/ToggleButton';
import { debugData } from './utils/debugData';
import { fetchNui } from './utils/fetchNui';

import { GenderFemale } from '@styled-icons/bootstrap/GenderFemale';
import { GenderMale } from '@styled-icons/bootstrap/GenderMale';
import TextAreaLabel from './components/TextAreaLabel';

debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

const App: React.FC = () => {
  const [gender, setGender] = useState('male');
  const [information, setInformation] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    height: 0,
    description: '',
  });

  const handleGender = (val: string) => {
    setGender(val);
    fetchNui('setGender', { gender: val });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchNui<{ success: boolean }>('register', {
      ...information,
      gender: gender,
    })
      .then((data) => {
        if (data.success) {
          fetchNui('hideFrame');
          setInformation({
            firstname: '',
            lastname: '',
            dateofbirth: '',
            height: 0,
            description: '',
          });
        }
      })
      .catch((e) => {
        console.log('error occured', e);
      });
  };

  return (
    <div className="w-full h-full font-oswald">
      <div className="w-[36vw] left-16 h-full absolute -z-50 bg-black opacity-70 blur-xl"></div>
      <form
        className="h-full w-[30vw] ml-20 text-white py-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          id="title"
          className="w-full grid grid-cols-12 gap-2 justify-items-center align-middle"
        >
          <div className="col-span-4 text-4xl text-center flex justify-center items-center">
            SOVEREIGN
          </div>
          <div className="col-span-8 px-2 h-full w-full">
            <div className="bg-gradient-radial from-[#CEAD6D] to-[#FDBF6E] text-neutral-800 rounded-md w-full h-full text-2xl flex justify-center items-center opacity-70">
              REGISTRATION
            </div>
          </div>
          <div className="col-span-12 opacity-30 p-2 font-light text-xl">
            Welcome to Sovereign City! Please create your identity before
            continuing.
          </div>
        </div>
        <InputLabel
          onChange={(e) =>
            setInformation({
              ...information,
              firstname: e.currentTarget.value,
            })
          }
          value={information.firstname}
          className="my-8"
          label="FIRSTNAME"
          name="firstname"
          pattern="\w+"
        />
        <InputLabel
          className="my-8"
          label="LASTNAME"
          name="lastname"
          onChange={(e) =>
            setInformation({
              ...information,
              lastname: e.currentTarget.value,
            })
          }
          value={information.lastname}
        />
        <InputLabel
          className="my-8"
          label="DATE OF BIRTH"
          name="dob"
          type="date"
          onChange={(e) =>
            setInformation({
              ...information,
              dateofbirth: e.currentTarget.value,
            })
          }
          value={information.dateofbirth}
        />
        <InputLabel
          className="my-8"
          label="HEIGHT"
          name="height"
          type="number"
          onChange={(e) =>
            setInformation({
              ...information,
              height: parseInt(e.currentTarget.value),
            })
          }
          value={information.height}
        />
        <TextAreaLabel
          className="my-8"
          label="DESCRIPTION"
          name="description"
          onChange={(e) =>
            setInformation({
              ...information,
              description: e.currentTarget.value,
            })
          }
          value={information.description}
        />
        <div className="inline-flex items-center">
          <div className="w-[22vh] inline-flex justify-between">
            <ToggleButton
              active={gender === 'male'}
              onClick={() => handleGender('male')}
            >
              <GenderMale size="42" />
            </ToggleButton>
            <ToggleButton
              active={gender === 'female'}
              onClick={() => handleGender('female')}
            >
              <GenderFemale size="42" />
            </ToggleButton>
          </div>
          <div className="flex flex-col ml-8 leading-none">
            <p className="text-neutral-500">GENDER</p>
            <p className="text-4xl uppercase text-[#FDBF6E]">{gender}</p>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-md w-full h-[12vh] bg-gradient-radial to-[#f3c301] via-[#fdbf6e] from-[#FEE3A2] hover:border-[3px] hover:border-white text-neutral-800 text-5xl transition-all"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default App;
