import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import Card from '@/components/Card'

// icons
import TaskIcon from '@/assets/feature/task.svg'
import MilestonesIcon from '@/assets/feature/milestones.svg'
import TimeIcon from '@/assets/feature/time.svg'
import TemplatesIcon from '@/assets/feature/templates.svg'
import AttachmentsIcon from '@/assets/feature/attachments.svg'
import TeammateIcon from '@/assets/feature/teammate.svg'

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
				<Card
					SVG={<TaskIcon />}
					Heading="Tasks"
					Desc="Break big projects into chunks 🍕. Tackle tasks one slice at a time and watch your team conquer!"
				/>
				<Card
					SVG={<MilestonesIcon />}
					Heading="Milestones"
					Desc="Mark key checkpoints 🗺️. Track progress and share wins—your project’s treasure map to success!"
				/>
				<Card
					SVG={<TaskIcon />}
					Heading="Due Dates and Times"
					Desc="Set deadlines ⏰ so everyone’s aligned. No more “oops” moments—just smooth sailing!"
				/>
			</StyledHeadingMain>

		</StyledDiv>
	);
};

export default index;
