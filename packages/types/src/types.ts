/**
 * A generic user for our change app
 * @public
 */
export interface IUser {
  id: number
  username: string
  name: string
  iconUrl: string
}

/**
 * A generic team for our change app
 * @public
 *
 * @remarks
 * The {@link @change/types#isTeam} type guard may be used to
 * detect whether a value conforms to this interface
 */
export interface ITeam {
  iconUrl: string
  name: string
  id: string
}
