import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';

export interface RoleProps {
    name: string;
    code: string;
}

function SoloDescription({name, code} : RoleProps) {
    return (
        <Fieldset legend={name}>
            <p className="m-0">
                You were reborn with a gun in your hand-the flesh and blood hand-not the metallic weapons 
                factory that covers most of your other arm. Whether as a freelance guard and killer-for-hire, 
                or as one of the Corporate cybersoldiers who enforce business deals and the Company's 
                "black operations," you're one of the elite fighting machines of the Time of the Red.
                <Divider />
                Most Solos put in military time during the 4th Corporate War, in a Corporate army, or in 
                one of the government's current "police actions" around the country. As the battle damage piles 
                up, you start to rely more and more upon tech: cyberlimbs for weapons and armor, bio-program 
                chips to increase your reflexes and awareness, combat drugs to give you that edge over your opponents.
                <Divider />
                When you're the best of the best, you might even leave the ranks of Corporate samurai and 
                go ronin-freelancing your lethal talents as a killer, bodyguard, or enforcer to whoever 
                can pay your very high fees. Sounds good?
                <Divider />
                There's a price-a heavy one. You've lost so much of your original meat body that you're
                almost a machine. Your killing reflexes are so jacked up that you have to restrain yourself 
                from going berserk at any moment. Years of combat drugs taken to keep the edge have given you 
                terrifying addictions. There are few people you can trust anymore.
                <Divider />
                One night you might sleep in a penthouse condo in the City, the next in a filthy alley on The 
                Street. But that's the price of being the best. And you're willing to pay it. Because you're a Solo.
            </p>
        </Fieldset>
    )
}

export default SoloDescription