import React, {useEffect, useState} from 'react';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import RoleDescription from './role/RoleDescription';

function RolePage() {

    const [selectedRole, setSelectedRole] = useState({ name: 'Solo', code: 'solo' })
    const roles = [
        { name: 'Solo', code: "solo" },
        { name: 'Netrunner', code: "netrunner" },
        { name: 'Rockerboy', code: "rockerboy" },
        { name: 'Nomad', code: "nomad" },
        { name: 'Tech', code: "tech"},
        { name: 'Fixer', code: "fixer" },
        { name: 'Medtech', code: "medtech"},
        { name: 'Lawman', code: "lawman" },
        { name: 'Exec', code: "exec" },
        { name: 'Media', code: "media" },
    ]

    useEffect(() => {
        console.log(selectedRole)
        //alert(selectedRole.code ?? "test")
    }, [selectedRole])

    return (
        <>
            <div className='col'>
                <RoleDescription name={selectedRole.name} code={selectedRole.code} />
            </div>
            <div className='col text-center'>
                <Dropdown value={selectedRole} onChange={(e) => setSelectedRole(e.value)} options={roles} optionLabel="name" 
                    placeholder="Select a role" className="w-full md:w-14rem" />
            </div> 
            <div className='col text-center'> {/* abstract this out to a rolePicture component */}
                    <Card>
                        <Image src={require(`../images/${selectedRole.code}.png`)}/>
                    </Card>
            </div>
        </>
    )
}

export default RolePage
        