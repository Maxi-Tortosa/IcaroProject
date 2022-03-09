import styled from 'styled-components';
import theme from '../../../Theme/base';
import { CgTrash, CgPen } from 'react-icons/cg';

const CategoriasAdmin = ({ categorias }) => {
	return (
		<div>
			<TitleContainer>
				<h3>Categorias</h3>
				<button> + Nueva Categoria</button>
			</TitleContainer>
			<TableContent>
				<TableHeader>
					<TableColumn isHeader>Id</TableColumn>
					<TableColumn isHeader>Nombre</TableColumn>
					<TableColumn isHeader>Color</TableColumn>
					<TableColumn isHeader></TableColumn>
				</TableHeader>

				{categorias.map((el, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{index + 1}</TableColumn>
							<TableColumn>{el.Nombre}</TableColumn>
							<TableColumn bgcolor={el.CategoriaID}>
								{theme.categories[el.CategoriaID]}
							</TableColumn>
							<TableColumn>
								<CgPen size={30} className='edit' />
								<CgTrash size={30} className='delete' />
							</TableColumn>
						</TableRow>
					);
				})}
			</TableContent>
		</div>
	);
};

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const TableContent = styled.div`
	width: 100%;
	padding: 10px 20px;
`;
const TableHeader = styled.header`
	display: flex;
	gap: 10px;
	text-align: left;
	font-family: ${theme.fontFamily.tertiary};
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: ${theme.color.blue};
`;
const TableRow = styled.div`
	display: flex;
	text-align: left;
	gap: 10px;
	padding: 10px 0;

	:hover {
		background-color: #f1f1f1;
		cursor: pointer;
	}
`;
const TableColumn = styled.div`
	flex: 1;
	${({ isHeader }) => !isHeader && `color: ${theme.color.lightGrey};`}
	background-color: ${({ bgcolor }) => bgcolor && theme.categories[bgcolor]};
	color: ${({ bgcolor }) => bgcolor && theme.color.white};

	.edit {
		:hover {
			color: ${theme.color.darkBlue};
		}
	}

	.delete {
		:hover {
			color: red;
		}
	}
`;

export default CategoriasAdmin;
