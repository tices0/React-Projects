import React from 'react';
// import { Loading } from 'react-loading-dot';
import styled from 'styled-components';

// const UnstyledLoaded = () => (
// 	<Loading background="#334680" margin="0.5rem" size="2.5rem" />
// );

// const Loading = ({className, children}) => (
//     <div className={className}>
//         {children}
//     </div>
// )

const Test = styled.div`
	border: 1px solid red;
	color: red;
`;

const Text = () => <div>sample text in div</div>;

// console.log(UnstyledLoaded);

// const StyledLoaded = styled(UnstyledLoaded)`
// 	position: absolute;
// 	border: 1px solid red;
// 	size: 5rem;
// `;

// console.log(StyledLoaded);

const Loaded = () => {
	return <Test as={Text} />;
};

export default Loaded;
