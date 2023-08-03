import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';

export interface RoleProps {
    name: string;
    code: string;
}

function RockerDescription({ name, code}: RoleProps) {    
    return (
        <Fieldset legend={name}>
            <p className="m-0">
                If you live to rock, this is where you belong. As a Rockerboy, you're one of the street poets, 
                the social conscience, and the rebels of the Time of the Red. With the advent of digital porta-studios 
                and garage music mastering, every Rockerboy with a message can take it to The Street, put it in the 
                record stores, bounce it off the comsats. Sometimes, your message isn't something the Corporations 
                or the government wants to hear. Sometimes what you say is going to get right in the faces of the 
                powerful people who really want to run this world. But you don't care, because as a Rockerboy, you 
                know it's your place to challenge authority, whether in straight-out protest songs that tell it like 
                it is, playing kick-ass rock n' roll to get the people away from the TV sets and into The Streets, 
                firing up the crowd with speeches, or composing fiery writings that shape the minds and hearts of millions.
                <Divider />
                You have a proud history as a Rockerboy. Dylan, Springsteen, U2, NWA, the Who, Jett, the Stones-the 
                legions of hard-rock heroes who told the truth with screaming guitars or gut-honest lyrics. You have 
                the power to get the people up; to lead, inspire, and inform. Your message can give the timid courage, 
                the weak strength, and the blind vision. Rockerboy legends like Johnny Silverhand, Rockerboy Manson 
                (for whom the Role is named) and Kerry Eurodyne have led armies against Corporations and governments.
                <Divider />
                Rockerboys have exposed corruption and brought down dictators. It's a lot of power for someone doing 
                gigs every night in another city. But you can handle it. After all: you came to play!
            </p>
        </Fieldset>
    )
}

export default RockerDescription