import Link from 'next/link';
import { Mutation } from 'react-apollo';
import {
  NavStyles,
  NavRightContainer,
  NavButton,
  NavButtonSecondary,
} from './styles';
import User from '../User/index';
// import Signout from '../Signout/index';

import { ContainerOnlyForNoProfile } from '../Permissions/NoProfile/index';
import { ContainerOnlyForProfile } from '../Permissions/Profile/index';
import { ContainerOnlyForStudents } from '../Permissions/Student/index';
import { ContainerOnlyForScientists } from '../Permissions/Scientist/index';
import { ContainerOnlyForParticipants } from '../Permissions/Participant/index';
import { ContainerOnlyForTeachers } from '../Permissions/Teacher/index';

import { TOGGLE_DASHBOARD_MUTATION } from '../Dashboard/index';

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <ContainerOnlyForNoProfile>
          <NavRightContainer>
            <Link href="/login">
              <NavButton>Login</NavButton>
            </Link>
            <Link href="/signup">
              <NavButtonSecondary>Signup</NavButtonSecondary>
            </Link>
          </NavRightContainer>
        </ContainerOnlyForNoProfile>

        <ContainerOnlyForScientists>
          <NavRightContainer>
            <Link href="/templates/my">
              <NavButton>Templates</NavButton>
            </Link>
            <Link href="/tasks/my">
              <NavButton>Tasks</NavButton>
            </Link>
            <Link href="/studies/my">
              <NavButton>Studies</NavButton>
            </Link>
          </NavRightContainer>
        </ContainerOnlyForScientists>

        <ContainerOnlyForTeachers>
          <NavRightContainer>
            <Link href="/classes/my">
              <NavButton>Classes</NavButton>
            </Link>
          </NavRightContainer>
        </ContainerOnlyForTeachers>

        <ContainerOnlyForStudents>
          <NavRightContainer>
            <Link href="/bank">
              <NavButton>Research studies</NavButton>
            </Link>
            <Link href="/onboarding">
              <NavButton>Student Onboarding</NavButton>
            </Link>
          </NavRightContainer>
        </ContainerOnlyForStudents>

        <ContainerOnlyForParticipants>
          <NavRightContainer>
            <Link href="/studies/all">
              <NavButton>Research studies</NavButton>
            </Link>
          </NavRightContainer>
        </ContainerOnlyForParticipants>

        <ContainerOnlyForProfile>
          <NavRightContainer>
            {me && (
              <Mutation mutation={TOGGLE_DASHBOARD_MUTATION}>
                {toggleDashboard => (
                  <NavButton onClick={toggleDashboard}>Dashboard</NavButton>
                )}
              </Mutation>
            )}
          </NavRightContainer>
        </ContainerOnlyForProfile>
      </NavStyles>
    )}
  </User>
);

export default Nav;
