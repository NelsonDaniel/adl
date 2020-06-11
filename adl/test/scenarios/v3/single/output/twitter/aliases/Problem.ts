import { GenericProblem } from '../models/GenericProblem';
import { InvalidRequestProblem } from '../models/InvalidRequestProblem';
import { ClientForbiddenProblem } from '../models/ClientForbiddenProblem';
import { DisallowedResourceProblem } from '../models/DisallowedResourceProblem';
import { UnsupportedAuthenticationProblem } from '../models/UnsupportedAuthenticationProblem';
import { UsageCapExceededProblem } from '../models/UsageCapExceededProblem';
import { ResourceNotFoundProblem } from '../models/ResourceNotFoundProblem';
import { ResourceUnauthorizedProblem } from '../models/ResourceUnauthorizedProblem';
export type Problem = Xor<GenericProblem, InvalidRequestProblem, ClientForbiddenProblem, ResourceNotFoundProblem, ResourceUnauthorizedProblem, DisallowedResourceProblem, UnsupportedAuthenticationProblem, UsageCapExceededProblem>;
