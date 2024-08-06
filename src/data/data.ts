
import progressIcon from '../assets/Icon-0.png'
import financeIcon from '../assets/Icon-1.png'
import reloadIcon from '../assets/Icon-2.png'
import lastIcon from '../assets/Icon-3.png'

type AboutType  = {
    title : string,
    icon : string,
    desc : string
};


export const about : AboutType[] = [
    {
        title : '50M+',
        icon : progressIcon,
        desc : 'Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
    },
    {
        title : '$100M',
        icon : financeIcon,
        desc : 'Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
    },
    {
        title : '30%',
        icon : reloadIcon,
        desc : 'Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
    },
    {
        title : '60+',
        icon : lastIcon,
        desc : 'Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
    }
] 

