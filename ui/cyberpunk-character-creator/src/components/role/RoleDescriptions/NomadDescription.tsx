import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';

export interface RoleProps {
    name: string;
    code: string;
}

function NomadDescription({name, code} : RoleProps) {
    return (
        <Fieldset legend={name}>
            <p className="m-0">
                Years ago, the Corps drove your family off the form. They rolled in, took over the land, 
                and put rent-a-cops all over the place. But that was before the War. You were loners, 
                homeless, until you created a Nomad Pack of nearly two-hundred members. Back then, your Pack 
                was crammed into a huge, ragtag fleet of cars, vans, buses, and RVS roaming the freeways 
                looking for supplies, odd jobs, and spare parts in a fragmented world. The Pack was your 
                home-it had teachers, Medtechs, leaders, and mechanics-a virtual town on wheels in which 
                everyone was related by marriage or kinship.
                <Divider />
                But in the Time of the Red, your Nomad Pack has evolved. Your knowledge of roodcraft-of how 
                to get between the safezones over the savage highways has allowed you to become the masters 
                of getting people, supplies, and materials to a world that desperately needs them. Your cousins 
                on the open seas have taken over the huge container ships and turned them into the Nomad convoys 
                keeping civilization running. Your Deltajock famboys keep the supply lines to the Orbital 
                Highriders open. If it has to get somewhere and get there safely, Nomads get the job done. 
                Your vehicles are well-armored and bristling with stolen weapons: miniguns, rocket launchers, and the like.
                <Divider />
                Every kid knows how to use a rifle, and everyone packs a knife. Like modern-day cowboys, you 
                ride the hard trail. You've got a gun, a bike, and your Family, and that's all you need. You're a Nomad.
            </p>
        </Fieldset>
    )
}

export default NomadDescription