import React from "react";
import { Else, If, Then } from "react-if";

interface ListProps<TypeData> {
	loading?: boolean;
	skeleton?: number;
	data: TypeData[] | undefined;
	render: (item: TypeData, index: number) => React.ReactNode;
	renderSkeleton?: (index: number) => React.ReactNode;
	notFound?: React.ReactNode;
}

export const List = <TypeData,>({
	loading,
	skeleton = 4,
	data = [],
	render,
	renderSkeleton,
	notFound,
}: ListProps<TypeData>) => {
	const validData = Array.isArray(data) ? data : [];
	return (
		<React.Fragment>
			<If condition={loading}>
				<Then>
					{Array?.from({ length: skeleton }).map((_, index) => (
						<React.Fragment key={index.toString()}>
							{renderSkeleton ? (
								renderSkeleton(index)
							) : (
								<div className="loading" />
							)}
						</React.Fragment>
					))}
				</Then>
				<Else>
					<If condition={validData?.length === 0}>
						<Then>{notFound ? notFound : null}</Then>
					</If>
					{validData?.map((item, index) => (
						<React.Fragment key={index.toString()}>
							{render(item, index)}
						</React.Fragment>
					))}
				</Else>
			</If>
		</React.Fragment>
	);
};
