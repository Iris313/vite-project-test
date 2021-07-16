/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-14 21:54:34
 * @LastEditTime: 2021-07-14 22:02:12
 */

export default [
    {
      url: '/api/getUsers',
      method: 'get',
      response: ({ body }) => {
        return {
          code: 0,
          message: 'ok',
          data: ['userA','userB'],
        };
      },
    },
];