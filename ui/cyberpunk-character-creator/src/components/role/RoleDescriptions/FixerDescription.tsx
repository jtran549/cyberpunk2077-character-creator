import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';

export interface RoleProps {
    name: string;
    code: string;
}

function FixerDescription({ name, code}: RoleProps) {    
    return (
        <Fieldset legend={name}>
            <p className="m-0">
                You realized fast that you weren't ever going to get a Corporate job or be tough enough to be a Solo. 
                But you always knew you had a knack for figuring out what other people wanted, and how to get it for them. 
                For a price, of course. Now your deals have moved past the nickel-and-dime stuff into the big time. Maybe 
                you move illegal weapons over the border. Or steal and resell medical supplies. Perhaps you're a skill broker 
                acting as an agent for high-priced Solos and 'Runners, or even hiring a whole Nomad pack to back a client's contracts.
                <Divider />
                You buy and sell favors like an old-style Mafia godfather. You have connections into all kinds of businesses, 
                deals, and political groups. You use your contacts and allies as part of a vast web of intrigue and coercion. 
                If there's a hot nightclub in the City, you've bought into it. If there are military-class weapons on The Street, 
                you smuggled 'em in. If there's a faction war going down, you're negotiating between sides with an eye on the main chance.
                <Divider />
                But you're not entirely in it for the bucks. If someone needs to get the heat off, you'll hide them. You get people 
                housing when there isn't any, and you bring in food when the streets are blockaded. Maybe you do it because you know 
                they'll owe you later, but you're not sure. You're one part Robin Hood and two ports Al Capone. In the past, they would 
                have called you a crime lord. But this is the fragmented, nasty, deadly Time of the Red. So now they call you a Fixer.
            </p>
        </Fieldset>
    )
}

export default FixerDescription