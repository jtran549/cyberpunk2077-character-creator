import React, {useEffect, useState} from 'react';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { Fieldset } from 'primereact/fieldset';

        
function RolePage() {

    const [selectedRole, setSelectedRole] = useState('solo');
    const roles = [
        { name: 'Solo', code: 'solo' },
        { name: 'Netrunner', code: 'netrunner' },
        { name: 'Rockerboy', code: 'rockerboy' },
        { name: 'Nomad', code: 'nomad' },
        { name: 'Tech', code: 'tech'},
        { name: 'Fixer', code: 'fixer' },
        { name: 'Medtech', code: 'medtech'},
        { name: 'Lawman', code: 'Lawman'},
        { name: 'Exec', code: 'Exec'},
        { name: 'Media', code: 'Media'},
    ]

    return (
        <>
            <div className='col'> {/* Abstract this out to a "roleInfo" component or something*/}
                <Fieldset legend="Netrunner">
                            <p className="m-0">
                                You're a brain-burning computer hacker & master of the Post-NET cyberverse in the Time of the Red. 
                                At three, your parents bought you an old Kirama LPD-12 cyberdeck with Zetatech 526 optical goggles 
                                (you were too young for interface plugs), and your life was changed. By fifth grade, you were already 
                                using REFRAME-G1s meta-programming to crack into the school district's system and change your grades. 
                                When you were thirteen, you shifted enough funds out of unprotected Trans United Bank accounts to finance 
                                your first neural interface plugs.
                                <Divider />
                                You couldn't wait to run high and fast with the other gods of the NET-Bartmoss, Magnificent Curtis, 
                                and the rest. Then the 4th Corp War blew the Old NET apart. The R.A.B.I.D.S. made NET travel a suicide run; 
                                the Nodes were fragmented or corrupted. But there were still places to run. You just had to go there a
                                nd jack in the hard way. You traded in sitting on the couch for a Bodyweight combat bodysuit and 
                                Virtuality 5 interface goggles to mesh NET with Meatspace. The systems you cracked were smaller, 
                                but even deadlier.
                                <Divider />
                                Now, you're really part of a team, with Solos to cover your back, Medtechs to restart your heart if 
                                the ICE gets you, and Techs to help you hot-wire your cyberdeck for more speed and software deployment. 
                                Now, nothing can stop you. As an electronic wraith, you slip into the "hardest" mainframe systems 
                                with ease: stealing, trading, and selling their deepest secrets at will. The Black ICE may still 
                                kill you in the end, but until the ride runs out you'll be there, bare-brained and headfirst in the New NET.
                            </p>
                </Fieldset>
            </div>
            <div className='col text-center'>
                <Dropdown value={selectedRole} onChange={(e) => setSelectedRole(e.value)} options={roles} optionLabel="name" 
                    placeholder="Select a role" className="w-full md:w-14rem" />
            </div> 
            <div className='col text-center'>
                    <Card>
                        <Image src={require('../images/netrunner.png')}/>
                    </Card>
            </div>
        </>
    )
}

export default RolePage
        