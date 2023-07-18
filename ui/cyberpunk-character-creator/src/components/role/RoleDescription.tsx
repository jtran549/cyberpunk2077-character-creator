import React from 'react';
import RoleCodes from '../../data/enums/RoleCodes';
import NetrunnerDescription from './RoleDescriptions/NetrunnerDescription';
import SoloDescription from './RoleDescriptions/SoloDescription';
import RockerDescription from './RoleDescriptions/RockerDescription';
import NomadDescription from './RoleDescriptions/NomadDescription';
import TechDescription from './RoleDescriptions/TechDescription';
import FixerDescription from './RoleDescriptions/FixerDescription';
import MedtechDescription from './RoleDescriptions/MedtechDescription';
import LawmanDescription from './RoleDescriptions/LawmanDescription';
import ExecDescription from './RoleDescriptions/ExecDescription';
import MediaDescription from './RoleDescriptions/MediaDescription';

export interface RoleProps {
    name: string;
    code: string;
}

function RoleDescription({ name, code}: RoleProps) {
    switch(code) {
        case RoleCodes.Solo:
            return <SoloDescription name={name} code={code} />
        case RoleCodes.Netrunner:
            return <NetrunnerDescription name={name} code={code} />
        case RoleCodes.Rockerboy:
            return <RockerDescription name={name} code={code} />
        case RoleCodes.Nomad:
            return <NomadDescription name={name} code={code} />
        case RoleCodes.Tech:
            return <TechDescription name={name} code={code} />
        case RoleCodes.Fixer:
            return <FixerDescription name={name} code={code} />
        case RoleCodes.Medtech:
            return <MedtechDescription name={name} code={code} />
        case RoleCodes.Lawman:
            return <LawmanDescription name={name} code={code} />
        case RoleCodes.Exec:
            return <ExecDescription name={name} code={code} />
        case RoleCodes.Media:
            return <MediaDescription name={name} code={code} />
        default:
            return <></>
    }
}

export default RoleDescription