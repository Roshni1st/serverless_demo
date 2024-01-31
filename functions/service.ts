import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { User } from '../models';

export const getAll = async (): Promise<APIGatewayProxyResult> => {
  try {
    const users = await User.findAll();
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: users,
        status: true,
      }),
    };
  } catch (err) {
    console.log('::::::: err getAll ::::::: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        status: false,
      }),
    };
  }
};

export const getById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = Number(event.pathParameters?.id);

    if (isNaN(id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid ID format',
          status: false,
        }),
      };
    }

    const userInstance = await User.findOne({ where: { id } });

    if (!userInstance) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: 'User not found',
          status: false,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: userInstance,
        status: true,
      }),
    };
  } catch (err) {
    console.log('::::::: err getById ::::::: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        status: false,
      }),
    };
  }
};

export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = event.body || '{}';
    const data = JSON.parse(body);

    const userInstance = await User.create(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: userInstance,
        status: true,
      }),
    };
  } catch (err) {
    console.log('Error in createUser:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        status: false,
      }),
    };
  }
};

export const deleteUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = Number(event.pathParameters?.id);

    if (isNaN(id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid ID format',
          status: false,
        }),
      };
    }

    await User.destroy({ where: { id } });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'User Deleted !!',
        status: true,
      }),
    };
  } catch (err) {
    console.log('::::::: Err deleteUser ::::::: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        status: false,
      }),
    };
  }
};

export const updateUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = Number(event.pathParameters?.id);
    const body = event.body || '{}';
    const data = JSON.parse(body);
    const { first_name, last_name, age, dob, about } = data;

    if (isNaN(id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid ID format',
          status: false,
        }),
      };
    }

    const [updatedRows] = await User.update(
      {
        first_name,
        last_name,
        about,
        age,
        dob,
      },
      { where: { id } },
    );

    if (updatedRows === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: 'User not found',
          status: false,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'User Updated !!',
        status: true,
      }),
    };
  } catch (err) {
    console.log('::::::: err updateUser ::::::: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        status: false,
      }),
    };
  }
};
