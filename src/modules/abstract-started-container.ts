import { StartedTestContainer, StopOptions, StoppedTestContainer } from "../test-container";
import { Host } from "../docker-client-factory";
import { Port } from "../port";
import { Command, ContainerName, ExecResult } from "../docker-client";
import { Id as ContainerId } from "../container";
import { Readable } from "stream";

export class AbstractStartedContainer {
  constructor(protected readonly startedTestContainer: StartedTestContainer) {}

  public stop(options?: Partial<StopOptions>): Promise<StoppedTestContainer> {
    return this.startedTestContainer.stop(options);
  }

  public getContainerIpAddress(): Host {
    return this.startedTestContainer.getContainerIpAddress();
  }

  public getMappedPort(port: Port): Port {
    return this.startedTestContainer.getMappedPort(port);
  }

  public getName(): ContainerName {
    return this.startedTestContainer.getName();
  }

  public getId(): ContainerId {
    return this.startedTestContainer.getId();
  }

  public exec(command: Command[]): Promise<ExecResult> {
    return this.startedTestContainer.exec(command);
  }

  public logs(): Promise<Readable> {
    return this.startedTestContainer.logs();
  }
}
