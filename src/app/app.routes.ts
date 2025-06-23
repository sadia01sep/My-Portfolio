import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Education } from './education/education';

export const routes: Routes = [
    {path:'',
     component:Home
    },{
        path:'education',
        component:Education
    },
    {path:'about',
     component:About
    },
    {path: 'projects',
        component:Projects
    },
    {path:'contact',
     component:Contact
    }
];
