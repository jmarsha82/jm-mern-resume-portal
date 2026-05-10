import React from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  GeneralsContextProvider,
  generalsReducer,
  GeneralsContext,
} from '../context/GeneralContext';
import {
  CurrentSkillsContextProvider,
  currentSkillsReducer,
  CurrentSkillsContext,
} from '../context/CurrentSkillsContext';
import {
  WorkExperiencesContextProvider,
  workExperiencesReducer,
  WorkExperiencesContext,
} from '../context/WorkExperienceContext';
import {
  EducationsContextProvider,
  educationsReducer,
  EducationsContext,
} from '../context/EducationContext';
import {
  FullSkillsContextProvider,
  fullSkillsReducer,
  FullSkillsContext,
} from '../context/FullSkillsContext';
import {
  DevBooksContextProvider,
  devBooksReducer,
  DevBooksContext,
} from '../context/DevBookContext';
import {
  DevLinksContextProvider,
  devLinksReducer,
  DevLinksContext,
} from '../context/DevLinkContext';
import { useGeneralsContext } from '../hooks/useGeneralsContext';
import { useCurrentSkillsContext } from '../hooks/useCurrentSkillsContext';
import { useWorkExperiencesContext } from '../hooks/useWorkExperienceContext';
import { useEducationsContext } from '../hooks/useEducationContext';
import { useFullSkillsContext } from '../hooks/useFullSkillsContext';
import { useDevBooksContext } from '../hooks/useDevBooksContext';
import { useDevLinksContext } from '../hooks/useDevLinksContext';

const reducerCases = [
  {
    label: 'generals',
    reducer: generalsReducer,
    stateKey: 'generals',
    setType: 'SET_GENERALS',
    createType: 'CREATE_GENERAL',
    deleteType: 'DELETE_GENERAL',
  },
  {
    label: 'current skills',
    reducer: currentSkillsReducer,
    stateKey: 'currentSkills',
    setType: 'SET_CURRENT_SKILLS',
    createType: 'CREATE_CURRENT_SKILL',
    deleteType: 'DELETE_CURRENT_SKILL',
  },
  {
    label: 'work experiences',
    reducer: workExperiencesReducer,
    stateKey: 'workExperiences',
    setType: 'SET_WORK_EXPERIENCE',
    createType: 'CREATE_WORK_EXPERIENCE',
    deleteType: 'DELETE_WORK_EXPERIENCE',
  },
  {
    label: 'educations',
    reducer: educationsReducer,
    stateKey: 'educations',
    setType: 'SET_EDUCATIONS',
    createType: 'CREATE_EDUCATION',
    deleteType: 'DELETE_EDUCATION',
  },
  {
    label: 'full skills',
    reducer: fullSkillsReducer,
    stateKey: 'fullSkills',
    setType: 'SET_FULL_SKILLS',
    createType: 'CREATE_FULL_SKILL',
    deleteType: 'DELETE_FULL_SKILL',
  },
  {
    label: 'dev books',
    reducer: devBooksReducer,
    stateKey: 'devBooks',
    setType: 'SET_DEVBOOKS',
    createType: 'CREATE_DEVBOOK',
    deleteType: 'DELETE_DEVBOOK',
  },
  {
    label: 'dev links',
    reducer: devLinksReducer,
    stateKey: 'devLinks',
    setType: 'SET_DEVLINKS',
    createType: 'CREATE_DEVLINK',
    deleteType: 'DELETE_DEVLINK',
  },
];

const hookCases = [
  {
    label: 'generals',
    hook: useGeneralsContext,
    provider: GeneralsContextProvider,
    context: GeneralsContext,
    stateKey: 'generals',
    dispatchKey: 'dispatchGeneral',
    error: 'useGeneralsContext must be used inside an GeneralsContextProvider',
  },
  {
    label: 'current skills',
    hook: useCurrentSkillsContext,
    provider: CurrentSkillsContextProvider,
    context: CurrentSkillsContext,
    stateKey: 'currentSkills',
    dispatchKey: 'dispatchSkills',
    error: 'useCurrentSkillsContext must be used inside an CurrentSkillsContextProvider',
  },
  {
    label: 'work experiences',
    hook: useWorkExperiencesContext,
    provider: WorkExperiencesContextProvider,
    context: WorkExperiencesContext,
    stateKey: 'workExperiences',
    dispatchKey: 'dispatchExperience',
    error: 'useWorkExperiencesContext must be used inside an WorkExperiencesContextProvider',
  },
  {
    label: 'educations',
    hook: useEducationsContext,
    provider: EducationsContextProvider,
    context: EducationsContext,
    stateKey: 'educations',
    dispatchKey: 'dispatchEducation',
    error: 'useEducationsContext must be used inside an EducationsContextProvider',
  },
  {
    label: 'full skills',
    hook: useFullSkillsContext,
    provider: FullSkillsContextProvider,
    context: FullSkillsContext,
    stateKey: 'fullSkills',
    dispatchKey: 'dispatchFullSkills',
    error: 'useFullSkillsContext must be used inside an FullSkillsContextProvider',
  },
  {
    label: 'dev books',
    hook: useDevBooksContext,
    provider: DevBooksContextProvider,
    context: DevBooksContext,
    stateKey: 'devBooks',
    dispatchKey: 'dispatchDevBooks',
    error: 'useDevBooksContext must be used inside an DevBooksContextProvider',
  },
  {
    label: 'dev links',
    hook: useDevLinksContext,
    provider: DevLinksContextProvider,
    context: DevLinksContext,
    stateKey: 'devLinks',
    dispatchKey: 'dispatchDevLink',
    error: 'useDevLinksContext must be used inside an DevLinksContextProvider',
  },
];

describe('State Context Reducers', () => {
  test.each(reducerCases)('handles set, create, delete, and default for $label', ({
    reducer,
    stateKey,
    setType,
    createType,
    deleteType,
  }) => {
    const first = { _id: '1', name: 'first' };
    const second = { _id: '2', name: 'second' };

    const afterSet = reducer({ [stateKey]: null }, { type: setType, payload: [first] });
    expect(afterSet).toEqual({ [stateKey]: [first] });

    const afterCreate = reducer({ [stateKey]: [first] }, { type: createType, payload: second });
    expect(afterCreate).toEqual({ [stateKey]: [second, first] });

    const afterDelete = reducer({ [stateKey]: [first, second] }, { type: deleteType, payload: first });
    expect(afterDelete).toEqual({ [stateKey]: [second] });

    const originalState = { [stateKey]: [first] };
    expect(reducer(originalState, { type: 'UNKNOWN_ACTION' })).toBe(originalState);
  });
});

describe('State Context Providers and Hooks', () => {
  test.each(hookCases)('provider exposes the expected shape for $label', ({
    provider: Provider,
    context: Context,
    stateKey,
    dispatchKey,
  }) => {
    const Consumer = () => (
      <Context.Consumer>
        {(value) => (
          <>
            <span data-testid="state-value">{String(value[stateKey])}</span>
            <span data-testid="dispatch-type">{typeof value[dispatchKey]}</span>
          </>
        )}
      </Context.Consumer>
    );

    render(
      <Provider>
        <Consumer />
      </Provider>
    );

    expect(screen.getByTestId('state-value')).toHaveTextContent('null');
    expect(screen.getByTestId('dispatch-type')).toHaveTextContent('function');
  });

  test.each(hookCases)('hook returns provider context for $label', ({ hook, provider: Provider, stateKey, dispatchKey }) => {
    const wrapper = ({ children }) => <Provider>{children}</Provider>;
    const { result } = renderHook(() => hook(), { wrapper });

    expect(result.current[stateKey]).toBeNull();
    expect(typeof result.current[dispatchKey]).toBe('function');
  });

  test.each(hookCases)('hook throws outside provider for $label', ({ hook, error }) => {
    expect(() => renderHook(() => hook())).toThrow(error);
  });
});
