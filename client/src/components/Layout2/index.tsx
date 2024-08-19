import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";

const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	margin: 3rem 0;
`;

const StyledHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
		max-width: calc(100% - 30rem);
`;

const StyledHeadingMain = styled.div`
 		display: flex;
    flex-direction: column;
    align-items: center;
		width: 100%;
`;

const index = () => {
	return (
		<StyledDiv>
			<StyledHeadingMain>
				<StyledHeading>
					<WTypo
						label="FEATURES"
						type="sub-sm"
						color="rgba(184, 11, 10, 1)"
					/>
					<WTypo
						label="Features to make you stand out"
						type="main-md"
						color="#1e293b"
					/>
					<WTypo
						label="Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when."
						type="sub-lg"
						color="#64748b"
						style={{ textAlign: 'center' }}
					/>
				</StyledHeading>
			</StyledHeadingMain>

		</StyledDiv>
	);
};

export default index;
